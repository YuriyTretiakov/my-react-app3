export interface IButton {
    label: string,
    onClick: () => void
}
export interface Itask {
    taskName: string,
    status: string,
}
export interface IBoard {
    name: string,
    tasks:Itask[]
}