/*import { motion } from 'framer-motion';*/
import { ViewTransition } from "react";

function Transition() {
    return (
        <div className="">
            <ViewTransition
                enter={{
                    default: 'none'
                }}
                exit={{
                    default: 'none'
                }}
                default="none"
            >

            </ViewTransition>
        </div>
    )
}