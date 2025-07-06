import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 pb-4">
      <div className="flex flex-row justify-between">
        <ul className="flex flex-row gap-4">
          <li className="dark:text-muted-foreground dark:hover:text-foreground">
            Plateu 
          </li>
          <li className="dark:text-muted-foreground dark:hover:text-foreground">
            •
          </li>
          <li className="dark:text-muted-foreground dark:hover:text-foreground">
             Foundations That Scale 
          </li>
          <li className="dark:text-muted-foreground dark:hover:text-foreground">
            •
          </li>
          <li className="dark:text-muted-foreground dark:hover:text-foreground">
            Stable. Simple. Snappy.
          </li>
        </ul>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Crafted by{" "}
          <Link href="https://github.com/Navdeep-Codes" className="font-semibold text-foreground">Navdeep</Link>
        </p>
      </div>
    </footer>
  );
}
