import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../../components/ui/input";
import { Switch } from "../../components/ui/switch";

export default function Train() {
  return (
    <div className="flex space-x-4 p-4 ">
      <div className="w-1/3">
        <div className="flex justify-between">
          <div>
            <Select>
              <SelectTrigger className="w-[180px] !text-black">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="man">Man</SelectItem>
                <SelectItem value="woman">Woman</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Input></Input>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className="w-2/3 bg-green-200">Hello2</div>
    </div>
  );
}
