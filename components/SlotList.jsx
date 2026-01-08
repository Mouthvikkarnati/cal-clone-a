"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { api } from "../lib/api";

export default function SlotList({ slug, date, onSelect }) {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    api.slots(slug, date).then(setSlots);
  }, [date, slug]);

  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {slots.map(s => (
        <motion.button
          key={s.start}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="border rounded-lg py-2 text-sm hover:bg-gray-100"
          onClick={() => onSelect(s)}
        >
          {new Date(s.start).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </motion.button>
      ))}
    </div>
  );
}
