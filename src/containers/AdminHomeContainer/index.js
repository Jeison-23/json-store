'use client'

import React from 'react'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { useAdminHomeContainer } from '@/hooks/useAdminHomeContainer'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts"

export const AdminHomeContainer = () => {
  const { data, reportMonth, dataChart, dataChartMonth } = useAdminHomeContainer()

  return (
    <Grid m={4}>
      <Grid p={4} gap={4} templateColumns='1fr 1fr 1fr'  >
        <Grid
          h='80px'
          bg='teal.700'
          color='white'
          justifyContent='center'
          alignItems='center'
        >
          venta en el año
        </Grid>

        <Grid
          h='80px'
          bg='teal.600'
          color='white'
          justifyContent='center'
          alignItems='center'
        >
          {reportMonth?.sales?.totalSales.toLocaleString('in', { style: 'currency', currency: 'cop' }) || 'sin ventas hoy'}
        </Grid>

        <Grid
          h='80px'
          bg='teal.400'
          color='white'
          justifyContent='center'
          alignItems='center'
        >
          {data?.sales?.totalSales.toLocaleString('in', { style: 'currency', currency: 'cop' }) || 'sin ventas hoy'}
        </Grid>
      </Grid>

      <Grid gap={2} templateColumns='1fr 1fr' alignContent='center'>
        <Grid gap={2}>
          <Text as='b' fontSize='xl' justifySelf='center' >Gráficas de ventas del dia de hoy</Text>
          <Box h='500px' width='100%'>
            <ResponsiveContainer>
              <LineChart id='line-chart' data={dataChart}>
                <XAxis dataKey="label" />
                {/* <YAxis /> */}
                <Tooltip />
                {/* <Legend /> */}
                <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="sale" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Grid>

        {/* <BarChart
        id='chart'
        width={1000}
        height={600}
        data={dataChartMonth}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="2 5" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sale" fill="#82ca9d" />
      </BarChart> */}

        <Grid gap={2}>
          <Text as='b' fontSize='xl' justifySelf='center' >Gráficas de ventas del mes</Text>
          <Box h='500px' width='100%'>
            <ResponsiveContainer>
              <AreaChart
                data={dataChartMonth}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />

                <Tooltip />
                <Area type="monotone" dataKey="sale" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
