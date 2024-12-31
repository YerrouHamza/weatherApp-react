import GetCurrentCity from "../components/getCurrentCity";
import ThemeMode from "../controllers/themeMode";
import SerachClity from "../controllers/serachClity";

export default function ControlsBar() {
  return (
    <div className="flex justify-between items-center p-4">
        <ThemeMode />
        <SerachClity />
        <GetCurrentCity />
    </div>
  )
}
