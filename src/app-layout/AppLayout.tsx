import CollapsibleSidebar from './CollapsibleSidebar';
import AppHeader from './Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="flex pt-10 h-screen">
      <CollapsibleSidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <AppHeader />

        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
