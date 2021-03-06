import React from 'react'

const Select = props => {
    return (
        <select name={props.name} className="custom-select" onChange={e => props.handleChange(e)}  value={props.defaultValue}>
            <option value="">Selecione</option>
            <option value="bug">Bug</option>
            <option value="dragon">Dragon</option>
            <option value="eletric">Eletric</option>
            <option value="fighting">Fighting</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="ghost">Ghost</option>
            <option value="grass">Grass</option>
            <option value="ground">Ground</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="water">Water</option>
            <option value="fairy">Fairy</option>
            <option value="steel">Steel</option>
            <option value="dark">Dark</option>
        </select>
    )
}

export default Select