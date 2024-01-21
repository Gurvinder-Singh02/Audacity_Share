import { Label } from "@radix-ui/react-label";
import { Button, Input } from "../ui";
import "./Style.css";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Footer = () => {
  return (
    <>
      <div className=" Footer fixed bottom-2 right-2 p-1 px-2 rounded-xl cursor-pointer text-black ">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full" variant="outline">
              {" "}
              &copy; Gxuri
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md text-black">
            <DialogHeader>
              <DialogTitle> A Project Made By : Gxuri </DialogTitle>
              <DialogDescription>
                To Know More About him Click on the Link Below
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://gurvinder-singh02.github.io/Gxuri_web/"
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3 text-white">
                <a href="https://gurvinder-singh02.github.io/Gxuri_web/">O</a>
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Footer;
