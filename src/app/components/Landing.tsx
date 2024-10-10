import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";

export default function Landing() {
    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 style={{ fontSize: '2rem' }}>Test page</h2>
        <span style={{ fontSize: '1rem' }}>This is a NextJs template page</span>
        <Button color="danger">Press me</Button>
        <div className="flex gap-4">
          <Chip color="default">Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="danger">Danger</Chip>
        </div> 
        <div className="flex gap-4">
          <Chip color="warning" variant="solid">Solid</Chip>
          <Chip color="warning" variant="bordered">Bordered</Chip>
          <Chip color="warning" variant="light">Light</Chip>
          <Chip color="warning" variant="flat">Flat</Chip>
          <Chip color="warning" variant="faded">Faded</Chip>
          <Chip color="warning" variant="shadow">Shadow</Chip>
          <Chip color="warning" variant="dot">Dot</Chip>
        </div>
        <div className="flex gap-4 items-center">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="https://nextui.org/images/hero-card.jpeg"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
  