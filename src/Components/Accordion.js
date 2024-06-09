import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ label, children }) => {
    const [open, setOpen] = useState(false);

    const onAccordionClick = useCallback(() => setOpen(state => !state), [setOpen]);

    return (
        <div className="shadow-lg p-4 mb-8 px-8 rounded-xl">
            <div className="flex text-primary-medium items-center justify-between" onClick={onAccordionClick}>
                <span className="max-sm:text-xl text-2xl">
                    {label}
                </span>
                <span className="text-4xl">
                    {open ? '-' : '+'}
                </span>
            </div>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden max-sm:text-lg text-xl mt-8"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
