import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import FormBoxeador from './FormBoxeador'
import { PanelFlotante } from '@/modules/shared/components/PanelFlotante'
import { NewBoxeadorPanel } from './NewBoxeadorPanel'

export default function NuevoBoxeadorButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleOpen = () => {
    setIsOpen(true)
  }
  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon className="h-5 w-5 mr-2" /> Nuevo Boxeador
      </Button>
      <NewBoxeadorPanel
        open={isOpen}
        title="Titulo"
        onClose={handleClose}
        onAccept={() => {
          handleClose()
        }}
      />
    </>
  )
}
