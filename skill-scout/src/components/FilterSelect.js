import React from "react";
import Multiselect from "multiselect-react-dropdown";

export default function FilterSelect({ options, placeholder, onSelect, onRemove }) {
    return (
        <Multiselect
            customCloseIcon={<> X </>}
            isObject={false}
            onKeyPressFn={function noRefCheck() { }}
            onRemove={onRemove || function noRefCheck() { }}
            onSearch={function noRefCheck() { }}
            onSelect={onSelect || function noRefCheck() { }}
            options={options}
            placeholder={placeholder}
            style={{
                multiselectContainer: {
                    background: 'white',
                },
                chips: {
                    background: 'var(--light-green)',
                    color: 'var(--dark-green)',
                },
                searchBox: {
                    
                },
            }}
        />
    )
};