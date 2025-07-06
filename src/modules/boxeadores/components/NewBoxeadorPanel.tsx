'use client'
import { PanelFlotante } from '@/modules/shared/components/PanelFlotante'
import { useTabsStateStore } from '@/modules/shared/store/tabsStateStore'
import { useBoxeadorStore } from '@/modules/boxeadores/store/boxeadorStore'
import FormPerson from './FormPerson'
import FormNationality from './FormNationality'
import FormLugar from './FormLugar'
import TabsComponent from '@/modules/shared/components/Tabs'
import { useState } from 'react'
import FormBoxeador from './FormBoxeador'

export interface NewBoxeadorProps {
  open: boolean
  onClose: () => void
  onAccept: () => void
  title?: string
  acceptText?: string
}

export const NewBoxeadorPanel: React.FC<NewBoxeadorProps> = ({
  open,
  onClose,
  onAccept,
  title,
  acceptText,
}) => {
  const [currentTab, setCurrentTab] = useState<number>(0)


  return (
    <PanelFlotante
      open={open}
      onClose={onClose}
      onAccept={onAccept}
      title={title}
      doneText={acceptText}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      tabs={[
        'Boxeador',
        'Persona',
        'Nacionalidad',
        'Lugar',
      ]}
    >
      
      {currentTab === 0 && <FormBoxeador />}
      {currentTab === 1 && <FormPerson />}
      {currentTab === 2 && <FormNationality />}
      {currentTab === 3 && <FormLugar />}
    </PanelFlotante>
  )
}
