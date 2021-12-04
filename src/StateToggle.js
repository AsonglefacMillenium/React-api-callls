import React, { useState } from 'react'
import ButtonNav from './ButtonNav'
import { buttonData } from './buttonData'

const StateToggle = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="state-toggle">

            <ButtonNav
                onClick={() => setIsOpen(!isOpen)}
                title="Menu"
                Image="https://designcode.io/images/icons/courses.svg"
            />
            {
                isOpen && (
                    <div>
                        {buttonData.map((menu, index) => (
                            <ButtonNav
                                key={index}
                                title={menu.title}
                                Image={menu.image}
                            />
                        ))}

                    </div>
                )
            }


        </div>
    )
}

export default StateToggle
