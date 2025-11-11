import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { NewBoxeadorPanel } from '@/modules/boxeadores/components/NewBoxeadorPanel'

export default function NuevoEventoButton() {
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
        <AddIcon className="h-5 w-5 mr-2" /> Nuevo Evento
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
