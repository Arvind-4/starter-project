import Button from "@src/components/ui/button";

export default function HomePage() {
  return (
    <div className="mt-16 flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-4xl font-bold text-center">Hello :D</h1>
        <div className="mt-40">
          <Button />
        </div>
      </div>
    </div>
  );
}
