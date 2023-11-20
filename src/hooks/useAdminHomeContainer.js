
import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { ProductReport } from '@/graphql/productReport'
import moment from 'moment'

export const useAdminHomeContainer = () => {
  const date = new Date()
  const [dataChart, setDataChart] = useState([]);
  const [dataChartMonth, setDataChartMonth] = useState([]);
  const [dataChartYear, setDataChartYear] = useState([]);
  const [getProducts, { data, loading, error }] = useLazyQuery(ProductReport)
  const [getReportMonth, { data: reportMonth, loading: loadingReportMonth, }] = useLazyQuery(ProductReport)
  const [getReportYear, { data: reportYear, loading: loadingReportYear, }] = useLazyQuery(ProductReport)
  
  const refreshProducts = (filter = {}) => {
    getProducts({
      variables: { filter: filter },
      fetchPolicy: 'network-only'//'cache-and-network'
    })
  }

  const refreshReportMonth = (filter = {}) => {
    getReportMonth({
      variables: { filter: filter },
      fetchPolicy: 'network-only'//'cache-and-network'
    })
  }
  const refreshReportYear = (filter = {}) => {
    getReportYear({
      variables: { filter: filter },
      fetchPolicy: 'network-only'//'cache-and-network'
    })
  }

  useEffect(() => {
    refreshProducts({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      dayMonth: date.getDate(),
    }
    )
  }, [])

  useEffect(() => {
    refreshReportMonth({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    }
    )
  }, [])

  useEffect(() => {
    refreshReportYear({
      year: date.getFullYear(),
    }
    )
  }, [])

  useEffect(() => {
    if (data?.productReport) {
      const toGraph = data?.productReport?.data.map(ele => (
        {
          label: moment(ele.createAt.date).format('hh:mm a'),
          sale: ele.totalSale
        }
      ))
      setDataChart(toGraph)
    }
  }, [data?.productReport]);

  useEffect(() => {
    if (reportMonth?.productReport) {
      const buildReport = []
      const compare = (e) => buildReport.findIndex(ele => ele.label === e.label)
      
      const toGraph = reportMonth?.productReport?.data.map(ele => (
        {
          label: `dia ${ele.createAt.dayMonth}`,
          sale: ele.totalSale
        }
      ))
      toGraph.map((bar) => {
        if (!buildReport.length) {
          buildReport.push(bar)
        }else if ( compare(bar) >= 0) {
          const i = buildReport.findIndex(ele => ele.label === bar.label)
          const upd = {...buildReport[i], sale: buildReport[i].sale + bar.sale }
          buildReport[i] = upd
        } else {
          buildReport.push(bar)
        }
      })
      setDataChartMonth(buildReport)
    }
  }, [reportMonth?.productReport]);

  return {
    dataChart,
    dataChartMonth,
    refreshProducts,
    data: data?.productReport,
    reportMonth: reportMonth?.productReport,
    loading,
    error
  }
}
