import {
    SidebarProvider,
    Sidebar,
    SidebarTrigger,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarInset
} from "../components/ui/sidebar";
import { DashboardIcon, SewingPinFilledIcon, ClipboardIcon, DropdownMenuIcon, GearIcon, InfoCircledIcon, ExitIcon } from "@radix-ui/react-icons"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function CollapsibleSidebar() {
    return (
        <>
            <SidebarProvider>
                <Sidebar className="flex flex-col justify-between h-screen">
                    <div>
                        <SidebarMenu className="pt-14">
                            <SidebarMenuItem >
                                <NavLink to="/dashboard">
                                    <SidebarMenuButton isActive>
                                        <DashboardIcon className="mr-2" />
                                        <span>DashBoard</span>
                                    </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <NavLink to="vitaltask">
                                    <SidebarMenuButton isActive>
                                        <SewingPinFilledIcon className="mr-2" />
                                        <span>Vital Task</span>
                                    </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <NavLink to="my-task">
                                    <SidebarMenuButton isActive>
                                        <ClipboardIcon className="mr-2" />
                                        <span>My Task</span>
                                    </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <NavLink to="task-categories">
                                    <SidebarMenuButton isActive>
                                        <DropdownMenuIcon className="mr-2" />
                                        <span>Task Categories</span>
                                    </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <NavLink to="settings">
                                    <SidebarMenuButton isActive>
                                        <GearIcon className="mr-2" />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <NavLink to="help">

                                    <SidebarMenuButton isActive>
                                        <InfoCircledIcon className="mr-2" />
                                        <span>Help</span>
                                    </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </div>
                    <div className="border-t bottom-5 absolute">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <NavLink to='/'>
                                    <SidebarMenuButton isActive>
                                    <ExitIcon className="mr-2" />
                                    <span>Sign Out</span>
                                </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </div>
                </Sidebar>
                <SidebarInset>

                    <Outlet />
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}