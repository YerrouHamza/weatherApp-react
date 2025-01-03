import GetCurrentCity from "../components/getCurrentCity";
import ThemeMode from "../controllers/themeMode";
import SerachClity from "../controllers/serachClity";
import Card from "../components/ui/card";

export default function ControlsBar() {
  return (
    <Card className="h-fit" bodyClass="flex justify-between items-center p-5">
        <ThemeMode />
        <SerachClity />
        <GetCurrentCity />
    </Card>
  )
}
