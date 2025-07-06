'use client'
import { useEffect, useState } from 'react'
import { getNacionalidades } from '@/modules/boxeadores/services/fieldOptionsService'
import { OptionField } from '@/modules/shared/components/OptionField'
import { TextField } from '@/modules/shared/components/TextField'
import { useTabsStateStore } from '@/modules/shared/store/tabsStateStore'
import TabsComponent from '@/modules/shared/components/Tabs'

export default function FormNationality() {
  const [currentTab, setCurrentTab] = useState<number>(0)

  const [person, setPerson] = useState({
    name: '',
    alias: '',
    birthname: '',
    image: new File([''], ''),
  })

  const [nacionalidad, setNacionalidad] = useState(0)
  const [nacionalidades, setNacionalidades] = useState<
    { label: string; id: number; countryCode?: string }[]
  >([])

  useEffect(() => {
    getNacionalidades().then((data) => setNacionalidades(data))
  }, [])

  return (
    <form className="grid gap-2">
      <div className="overflow-auto">
        <TabsComponent tabs={['Existente', 'Nueva']} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>

      {currentTab === 0 && (
        <OptionField
          label="Nacionalidad"
          selectedOption={nacionalidad.toString()}
          onChange={(e) => setNacionalidad(Number(e.target.value))}
          id="nacionalidad"
          options={nacionalidades}
        />
      )}
      {currentTab === 1 && (
        <>
          <TextField label="Nacionalidad" id="nueva_nacionalidad" />
          <TextField label="Código de país" id="nueva_nacionalidad_codigo" />
        </>
      )}
    </form>
  )
}
