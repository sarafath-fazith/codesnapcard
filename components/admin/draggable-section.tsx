'use client'

import { useRef } from 'react'
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { GripVertical } from 'lucide-react'

const ItemType = 'SECTION'

interface DraggableSectionProps {
  id: string
  name: string
  index: number
  moveSection: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number
  id: string
  type: string
}

export function DraggableSection({ id, name, index, moveSection }: DraggableSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveSection(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemType,
    item: { type: ItemType, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1

  drag(drop(ref))

  return (
    <div
      ref={preview}
      style={{ opacity }}
      className="p-3 bg-background rounded-lg shadow-sm flex items-center justify-between cursor-move"
    >
      <div className="flex items-center">
        <div ref={ref} className="cursor-grab mr-2">
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  )
}
