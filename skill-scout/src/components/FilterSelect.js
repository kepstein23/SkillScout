import React from "react";
import Multiselect from "multiselect-react-dropdown";

export default function FilterSelect({ options, placeholder }) {
    return (
        <Multiselect
            customCloseIcon={<> X </>}
            isObject={false}
            onKeyPressFn={function noRefCheck() { }}
            onRemove={function noRefCheck() { }}
            onSearch={function noRefCheck() { }}
            onSelect={function noRefCheck() { }}
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
                    
                }
            }}
        />
    )
};