import { Outlet } from "react-router-dom";

export function GuestLayout() {
  const wr = "flex items-center justify-self-center h-screen	w-screen bg-gray";
  const guestWr = "w-full	max-w-[460px] my-0 mx-auto";
  return (
    <div className={wr}>
      <div className={guestWr}>
        <Outlet />
      </div>
    </div>
  );
}
