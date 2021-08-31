import React from 'react';

import './form-input.styles.css';

class FormInput extends React.Component {

    render() {
        const { label, handleChange, ...otherProps } = this.props;

        return (
            <div className='form-input-group'>
                <input
                    className='form-input'
                    onChange={handleChange}
                    {...otherProps}
                />
                {
                    label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null
                }
            </div>
        )
    }
}

export default FormInput;