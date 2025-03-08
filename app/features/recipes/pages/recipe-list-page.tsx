import {
  CameraIcon,
  CircleXIcon,
  CpuIcon,
  FilmIcon,
  GalleryVertical,
  Table,
  SlidersHorizontalIcon,
  ScrollTextIcon,
} from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { BlurFade } from "~/common/components/magicui/blur-fade";
import { Button } from "~/common/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "~/common/components/ui/drawer";
import { Toggle } from "~/common/components/ui/toggle";
import { CAMERA_MODELS, FILM_SIMULATIONS, IMAGE_SENSORS } from "../constants";
import { useState } from "react";
import { Separator } from "~/common/components/ui/separator";
import { Badge } from "~/common/components/ui/badge";

// 서버 사이드에서도 사용 가능한 방식으로 이미지 URL 생성
const recipeImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i + 1}/800/600`,
}));

export default function RecipeListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState(searchParams.get("view") || "grid");
  const [selectedCamera, setSelectedCamera] = useState(
    searchParams.get("camera") || ""
  );
  const [selectedSensor, setSelectedSensor] = useState(
    searchParams.get("sensor") || ""
  );
  const [selectedFilm, setSelectedFilm] = useState(
    searchParams.get("film") || ""
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    const params = new URLSearchParams();
    if (selectedCamera) params.set("camera", selectedCamera);
    if (selectedSensor) params.set("sensor", selectedSensor);
    if (selectedFilm) params.set("film", selectedFilm);
    setSearchParams(params);
    setIsOpen(false);
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
    setSearchParams((prev) => {
      prev.set("view", prev.get("view") === "grid" ? "list" : "grid");
      return prev;
    });
  };

  const handleReset = () => {
    setViewMode("grid");
    setSelectedCamera("");
    setSelectedSensor("");
    setSelectedFilm("");
    setSearchParams((prev) => {
      prev.delete("camera");
      prev.delete("sensor");
      prev.delete("film");
      return prev;
    });
    setIsOpen(false);
  };

  const handleRemoveFilter = (filter: string) => {
    setSearchParams((prev) => {
      prev.delete(filter);
      return prev;
    });
    switch (filter) {
      case "camera":
        setSelectedCamera("");
        break;
      case "sensor":
        setSelectedSensor("");
        break;
      case "film":
        setSelectedFilm("");
        break;
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-15 z-50 bg-background">
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {searchParams.get("camera") && (
              <Button
                variant={"secondary"}
                onClick={() => handleRemoveFilter("camera")}
              >
                {
                  CAMERA_MODELS.find(
                    (camera) => camera.value === searchParams.get("camera")
                  )?.label
                }
                <CircleXIcon className="size-6" />
              </Button>
            )}
            {searchParams.get("film") && (
              <Button
                variant={"secondary"}
                onClick={() => handleRemoveFilter("film")}
              >
                {
                  FILM_SIMULATIONS.find(
                    (film) => film.value === searchParams.get("film")
                  )?.label
                }
                <CircleXIcon className="size-6" />
              </Button>
            )}
            {searchParams.get("sensor") && (
              <Button
                variant={"secondary"}
                onClick={() => handleRemoveFilter("sensor")}
              >
                {
                  IMAGE_SENSORS.find(
                    (sensor) => sensor.value === searchParams.get("sensor")
                  )?.label
                }
                <CircleXIcon className="size-6" />
              </Button>
            )}
          </div>
          <Button variant={"secondary"} size={"icon"} asChild>
            <Toggle
              pressed={viewMode === "grid"}
              onPressedChange={() => toggleViewMode()}
            >
              {viewMode === "grid" ? (
                <Table className="size-6" />
              ) : (
                <GalleryVertical className="size-6" />
              )}
            </Toggle>
          </Button>
        </div>
      </div>
      {viewMode === "grid" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0.5 md:py-0 md:px-4 pb-20 pt-15">
          {recipeImages.map((image) => (
            <BlurFade delay={0.5 + image.id * 0.05} key={image.id}>
              <Link
                to={`/recipes/${image.id}`}
                className="relative aspect-[4/3] w-full"
              >
                <img
                  src={image.url}
                  alt="recipe"
                  className="w-full h-full object-cover"
                />
              </Link>
            </BlurFade>
          ))}
        </div>
      )}
      {viewMode === "list" && (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0.5 md:py-0 pb-20 space-y-10 pt-15">
          {recipeImages.map((image) => (
            <BlurFade delay={0.5 + image.id * 0.05} key={image.id}>
              <Link to={`/recipes/${image.id}`} className="aspect-[4/3] w-full">
                <img
                  src={image.url}
                  alt="recipe"
                  className="w-full object-cover"
                />
              </Link>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground p-4">
                <ul className="gap-0.5">
                  <li className="flex gap-2 items-center">
                    <ScrollTextIcon className="size-4" />
                    SUPERIA 800
                  </li>
                  <li className="flex gap-2 items-center">
                    <CameraIcon className="size-4" />
                    X-T4
                  </li>
                </ul>
                <ul className="flex flex-col gap-0.5">
                  <li className="flex gap-2">35mm</li>
                  <li className="flex gap-2">1/1000s</li>
                  <li className="flex gap-2">
                    <span className="italic">f</span>2.8
                  </li>
                  <li className="flex gap-2">ISO 100</li>
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      )}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button
            variant={"outline"}
            className="fixed bottom-24 right-6 z-50 size-12"
          >
            <SlidersHorizontalIcon className="size-8" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="space-y-4 px-8 min-h-svh">
          <div className="space-y-2">
            <DrawerTitle>필터</DrawerTitle>
            <DrawerDescription>원하는 필터를 선택하세요.</DrawerDescription>
          </div>
          <div>
            <Separator className="my-2" />
            <div className="flex flex-wrap gap-2">
              <Toggle asChild disabled>
                <CameraIcon className="size-4" />
              </Toggle>
              {CAMERA_MODELS.map((camera) => (
                <Toggle
                  key={camera.value}
                  pressed={selectedCamera === camera.value}
                  onPressedChange={(pressed) => {
                    setSelectedCamera(pressed ? camera.value : "");
                  }}
                >
                  {camera.label}
                </Toggle>
              ))}
            </div>
          </div>
          <div>
            <Separator className="my-2" />
            <div className="flex flex-wrap gap-2">
              <Toggle asChild disabled>
                <CpuIcon className="size-4" />
              </Toggle>
              {IMAGE_SENSORS.map((sensor) => (
                <Toggle
                  key={sensor.value}
                  pressed={selectedSensor === sensor.value}
                  onPressedChange={(pressed) => {
                    setSelectedSensor(pressed ? sensor.value : "");
                  }}
                >
                  {sensor.label}
                </Toggle>
              ))}
            </div>
          </div>
          <div>
            <Separator className="my-2" />
            <div className="flex flex-wrap gap-2">
              <Toggle asChild disabled>
                <FilmIcon className="size-4" />
              </Toggle>
              {FILM_SIMULATIONS.map((film) => (
                <Toggle
                  key={film.value}
                  pressed={selectedFilm === film.value}
                  onPressedChange={(pressed) => {
                    setSelectedFilm(pressed ? film.value : "");
                  }}
                >
                  {film.label}
                </Toggle>
              ))}
            </div>
          </div>
          <DrawerFooter className="flex flex-row w-full *:flex-1 gap-4 px-0 pb-10">
            <Button
              variant={"outline"}
              onClick={handleReset}
              className="h-12 text-lg"
            >
              초기화
            </Button>
            <Button
              variant={"default"}
              onClick={handleApply}
              className="h-12 text-lg"
            >
              적용
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
