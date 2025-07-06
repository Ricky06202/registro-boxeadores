import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { Check, Close } from '@mui/icons-material'
import TabsComponent from './Tabs'

export interface PanelFlotanteProps {
  children?: React.ReactNode
  open: boolean
  onClose: () => void
  onAccept: () => void
  title?: string
  doneText?: string
  tabs?: string[]
  currentTab: number
  setCurrentTab: (tab: number) => void
}

export const PanelFlotante: React.FC<PanelFlotanteProps> = ({
  children,
  open,
  onClose,
  onAccept,
  title = 'Panel Flotante',
  doneText = 'Listo',
  tabs = [],
  currentTab,
  setCurrentTab,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Stack>

        <TabsComponent
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 1 }}>{children}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAccept} startIcon={<Check />}>
          {doneText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
