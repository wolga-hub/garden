import { componentRegistry } from "../../quartz/components/registry"

export { Explorer, ExplorerOptions } from "./explorer"
export { NotePropertiesComponent, NotePropertiesComponentOptions, NotePropertiesOptions } from "./note-properties"

export const plugins: Record<string, Record<string, (...args: unknown[]) => void>> = {
  "note-properties": {
    NoteProperties: (...args: unknown[]) => { componentRegistry.setOptionOverrides("note-properties", args[0] as Record<string, unknown>); },
  },
}

export const NoteProperties = plugins["note-properties"].NoteProperties
