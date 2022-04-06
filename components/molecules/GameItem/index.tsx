import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GameItemProps {
  title: string;
  categories: string;
  thumbnail:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
}
const GameItem = (props: GameItemProps) => {
  const { title, categories, thumbnail } = props;
  return (
    <>
      <div className="featured-game-card position-relative">
        <Link href="/detail">
          <a>
            <div className="blur-sharp">
              <Image
                className="thumbnail"
                src={`/img/${thumbnail}.png`}
                width="205"
                height="270"
                alt=""
              />
            </div>
            <div className="cover position-absolute bottom-0 m-32">
              <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                <div className="game-icon mx-auto">
                  <Image
                    src="/icon/console.svg"
                    width={56}
                    height={36}
                    alt="console-icon"
                  />
                </div>
                <div>
                  <p className="fw-semibold text-white text-xl m-0">{title}</p>
                  <p className="fw-light text-white m-0">{categories}</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default GameItem;
