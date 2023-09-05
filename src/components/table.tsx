'use client'

import { useState, useEffect } from 'react'
import { Character } from '../types/types'

export default function TableComponent() {

  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('http://localhost:3004/table')
      .then((res) => res.json())
      .then((characters) => {
        setCharacters(characters)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading characters data...</p>
  if (!characters) return <p>No characters data avaliable.</p>
 
  return (
    
    <table className="table-fixed table table-xs">
    <thead>
        <tr>
        <td>ID</td> 
        <th>Name</th> 
        <th>Gender</th> 
        <th>Ability</th> 
        <th>Minimal distance</th> 
        <th>Weight</th> 
        <th>Born</th>
        <th>In space since</th>
        <th>Beer consumption</th>
        <th>Knows the answer</th>
        <th>delete</th>
        </tr>
    </thead> 
    <tbody>
    {characters.map((character) => (
        <>
        <tr key={character.data.ID}>
            <th>{character.data.ID}</th>
            <td>{character.data.Name}</td>
            <td>{character.data.Gender}</td>
            <td>{character.data.Ability}</td>
            <td>{character.data['Minimal distance']}</td>
            <td>{character.data.Weight}</td>
            <td>{character.data.Born}</td>
            <td>{character.data['In space since']}</td>
            <td>{character.data['Beer consumption (l/y)']}</td>
            <td>{character.data['Knows the answer?']}</td> 
        </tr>
        {character.children.has_nemesis && (
        <table className="table table-xs">
            <thead>                      
                <tr>
                <th>ID</th> 
                <td>Character ID</td> 
                <td>Is alive?</td> 
                <td>Years</td>
                <td>delete</td> 
            </tr>
            </thead> 
            <tbody>
            {character.children.has_nemesis?.records.map((nemesis) => (
                <>
                <tr key={nemesis.data.ID}>
                <td>{nemesis.data.ID}</td>
                <td>{nemesis.data['Character ID']}</td>
                <td>{nemesis.data['Is alive?']}</td>
                <td>{nemesis.data.Years}</td>
                </tr>
                
                <table className="table table-xs">
                <thead>                      
                    <tr>
                    <th>ID</th> 
                    <td>Nemesis ID</td> 
                    <td>Secrete Code</td>
                    <td>delete</td> 
                    </tr>
                </thead> 
                <tbody>
                    {nemesis.children.has_secrete?.records.map((secrete) => (
                    <tr key={secrete.data.ID}>
                        <th>{secrete.data.ID}</th>
                        <th>{secrete.data['Nemesis ID']}</th>
                        <th>{secrete.data['Secrete Code']}</th>
                    </tr>
                    ))}
                </tbody>
                </table>
                </>
            ))}
            </tbody>
        </table>
        )}
    </>
        ))}
    </tbody> 
    </table>  
  )
}
