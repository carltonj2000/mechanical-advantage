import Image from "next/image";
import { ReactNode } from "react";
import { images, images2, images3, type ImagesT } from "./maImages";

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="bg-blue-200 underline">
      {children}
    </a>
  );
}
function Images({ imgs }: { imgs: ImagesT }) {
  return imgs.map((img, key) => (
    <div key={key} className="relative">
      <Image src={img.src} alt={img.alt} />
      <p className="absolute top-1 right-1 bg-indigo-100 bg-opacity-50 p-2 rounded">
        {img.alt}
      </p>
    </div>
  ));
}
export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-100 max-w-lg mx-auto sm:mt-1 sm:rounded-md sm:shadow-md sm:p-2 text-gray-700">
      <h1 className="text-center text-2xl font-semibold mb-4 mt-6">
        Mechanical Advantage Systems
      </h1>
      <p className="text-center">
        The images below are from the{" "}
        <A href="https://roperescuetraining.com/raising_5-to-1.php">
          rope rescue training site
        </A>
        ,{" "}
        <A href="https://youtu.be/GKWXIHIcF4o">
          the counting tension part 1 video
        </A>{" "}
        and{" "}
        <A href="https://youtu.be/x1FSdt3_Nlc">
          the counting tension part 2 video
        </A>
        . Some <A href="https://youtu.be/9L-LJvz-cZM">pulley system rules</A>{" "}
        are summarized below.
      </p>

      <ol className="list-decimal ml-5 my-4">
        <li>Even mechanical advantages (MA) are tied off at the anchor.</li>
        <li>Odd mechanical advantages are tied off at the load.</li>
        <li>
          The last pulley from the anchor to the haul-team is a change of
          direction. No mechanical advantage.
        </li>
        <li>
          A simple MA pulling on the haul of another simple MA become compounded
          and multiple the two MA.
        </li>
      </ol>

      <Images imgs={images} />

      <h2 className="text-center text-xl font-semibold mb-4 mt-6">
        Images Overflow 1
      </h2>

      <Images imgs={images2} />

      <h2 className="text-center text-xl font-semibold mb-4 mt-6">
        Images Overflow 2
      </h2>
      <Images imgs={images3} />
    </div>
  );
}
