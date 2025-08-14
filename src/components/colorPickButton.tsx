import { Note } from '@/interfaces/noteInterfaces'

interface ColorPickButton {
  color: Note['color']
  editColor: (color: Note['color']) => void
}

export default function ColorPickButton({ color, editColor }: ColorPickButton) {
  const colorClassName = `bg-card-${color}`
  return (
    <button
      className={`h-8 w-8 ${colorClassName} cursor-pointer rounded-full`}
      onClick={() => editColor(color)}
    />
  )
}
