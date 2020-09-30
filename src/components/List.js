import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './List.css'

export default function List(props){
    return(
        <ul className='ItemList'>
            {props.items.map((item) => (
                <li className='Item' key={item.id}>
                    <span 
                        onClick={() => props.toggle && props.toggle(item.id)}
                        style={{textDecoration:
                            item.complete
                            ? 'line-through' 
                            : 'none' }}
                    >{item.name}
                    </span>
                    <button
                        className='remove-btn'
                        onClick={() => props.remove(item)}
                    ><FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </li>
            ))}
        </ul>
    )
}