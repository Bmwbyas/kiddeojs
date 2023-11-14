import styles from '../../styles/Select.module.scss'
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";


const Select = ( { name, options, type, defaultValue, placeholder } ) => {
	
	const [ selectedValue, setSelectedValue ] = useState( type === 'checkbox' ? [] : defaultValue
)
	
	const [ isView, setIsView ] = useState( false )
	
	const { register, setValue } = useFormContext()
	
	useEffect( () => {
		setValue( name, selectedValue )
	}, [] )
	
	const onClose = () => setIsView( false )
	
	const toggleView = () => setIsView( !isView )
	
	const ref = useRef( null )
	useOnClickOutside( ref, onClose )
	
	
	return (
		<div ref={ ref } className={ styles.container }>
			<div className={ isView ? `${ styles.select } ${ styles.active }` : styles.select }
			     onClick={ toggleView }>
				{ typeof selectedValue === 'object'
					? selectedValue.join( ', ' )
					: selectedValue
				}
				{ typeof selectedValue === 'object' && selectedValue.length === 0 && placeholder }
			</div>
			
			{ isView && <div className={ styles.options__container }>
				{ options.map( ( item, key ) => {
					
					return <label
						className={ type === "radio" ? styles.input__label :
							`${ styles.input__label } ${ styles.input__label__checkbox }` }
						key={ key }
					>
						{ item }
						<input
							checked={ selectedValue.includes( item ) }
							{ ...register( name ) }
							value={ item }
							onClick={ () => {
								if ( type === 'radio' ) {
									setSelectedValue( item )
									onClose()
									return
								}
								if ( type === 'checkbox' ) {
									if ( selectedValue.includes( item ) ) {
										const checkboxSelected = selectedValue
										
										setSelectedValue( checkboxSelected.filter( i => i !== item ) )
										return;
									}
									setSelectedValue( [ ...selectedValue, item ] )
									return;
								}
							} }
							type={ type }
						/>
						{ type === 'checkbox' && selectedValue.includes( item ) &&
							<div className={ styles.checked }></div> }
					</label>
				} ) }
			
			</div>
			}
		
		</div>
	);
};

export default Select;
