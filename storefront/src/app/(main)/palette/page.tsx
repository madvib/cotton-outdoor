import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Color Palette",
  description: "Theme Colors on display",
}

export default function ColorPalette() {
  return (
    <div className="hero h-screen items-center">
      <div className="carousel h-full w-2/3 p-4 rounded-box">
        <div className="carousel-item w-1/2 h-2/3 bg-primary items-center text-center">
          <div className=" text-primary-content w-full">Primary</div>
        </div>
        <div className="carousel-item w-1/2 h-2/3 bg-secondary text-center items-center">
          <div className="text-secondary-content w-full">Secondary</div>
        </div>
        <div className=" carousel-item w-1/2 h-2/3 bg-accent text-center items-center">
          <div className=" text-accent-content w-full">Accent</div>
        </div>

        <div className=" carousel-item w-1/2 h-2/3 bg-info text-center items-center">
          <div className=" text-info-content w-full">Info</div>
        </div>
        <div className=" carousel-item w-1/2 h-2/3 bg-success text-center items-center">
          <div className=" text-success-content w-full">Success</div>
        </div>
        <div className=" carousel-item w-1/2 h-2/3 bg-warning text-center items-center">
          <div className=" text-warning-content w-full">Warning</div>
        </div>
      </div>
    </div>
  )
}
