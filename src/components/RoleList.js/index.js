import React from 'react'
import { Grid } from '@chakra-ui/react'
import { useRoleList } from '@/hooks/useRoleList'
import { ComponentTable } from '@/common/ComponentTable'
import { ComponentModal } from '@/common/ComponentModal'
import { RoleForm } from '../RoleForm'
import { ComponentAlert } from '@/common/ComponentAlert'
import { LuAlertTriangle } from 'react-icons/lu'

export const RoleList = (props) => {
  const { data, loading, refetch, modalRoleForm } = props

  const {
    header,
    actions,
    roleSelected,
    actionsAlert,
    closeRoleAlert,
    closeRoleModal,
    alertRolDelete,
    setRoleSelected,
  } = useRoleList(props)

  return (
    <Grid>
      <ComponentTable
        list={data}
        actions={actions}
        loading={loading}
        tableHead={header}
      />
      <ComponentModal
        title={`${!roleSelected._id ? 'Crear' : 'Editar'} Role`}
        onClose={closeRoleModal}
        body={
          <RoleForm
            roleSelected={roleSelected}
            closeRoleModal={closeRoleModal}
            modalRoleForm={modalRoleForm}
            refetch={refetch}
          />
        }
        isOpen={modalRoleForm.isOpen}
      />

      <ComponentAlert
        alertCentered
        title='Eliminar Registro'
        icon={LuAlertTriangle}
        isOpen={alertRolDelete.isOpen}
        onClose={closeRoleAlert}
        actionsButton={actionsAlert}
        message={`¿Deseas eliminar el registro ${roleSelected?.rol}?`}
      />
    </Grid>
  )
}
