import { UserButton } from "@clerk/nextjs"

export const DashBoardPage = () => {
    return (
        <div>
            <h1>Hello from Dashboard(Protected)</h1>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}

export default DashBoardPage