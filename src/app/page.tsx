"use client"
import { useState } from "react"

export default function Home() {
	const [imagen, setImagen] = useState<File | null>(null)

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.[0]) {
			setImagen(e.target.files?.[0])
		}
	}
	return <div className=''>
		<input type="file" accept="image/*" name="imagen" id="" onChange={handleImageChange} />
		<div>
			{imagen ? URL.createObjectURL(imagen) : "No hay imagen"}
			{imagen && <img src={URL.createObjectURL(imagen)} alt="Preview" />}
		</div>
	</div>
}
