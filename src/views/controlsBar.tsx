import GetCurrentCity from "../components/getCurrentCity";
import ThemeMode from "../controllers/themeMode";
import SerachCity from "../controllers/serachCity";
import Card from "../components/ui/card";

export default function ControlsBar() {
  return (
    <Card className="h-fit relative z-10" bodyClass="flex justify-between items-center p-5">
        <ThemeMode />
        <SerachCity />
        <GetCurrentCity />
    </Card>
  )
}
