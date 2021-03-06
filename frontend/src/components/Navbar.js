import React from 'react'

const Navbar = props => {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark ">
            <div className="form-group justify-content-center row col my-2 ml-5 mr-5 pl-5 pr-5">
                <input
                    value={props.search}
                    onChange={e => {props.handleChange(e)}}
                    className="form-control text-capitalize"
                    name="search"
                    placeholder="Buscar"
                    type="search"/>
            </div>
        </nav>
    )
}

export default Navbar;