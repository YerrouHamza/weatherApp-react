import GetCurrentCity from "../components/getCurrentCity";
import SerachCity from "../controllers/serachCity";
import Card from "../components/ui/card";

export default function ControlsBar() {
  return (
    <Card className="h-fit relative z-10" bodyClass="flex justify-between items-center flex-col md:flex-row gap-y-2 p-5">
        <SerachCity />
        <GetCurrentCity />
    </Card>
  )
}
