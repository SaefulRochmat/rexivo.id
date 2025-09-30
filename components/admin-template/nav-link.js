import Link from "next/link";

export default function NavLink({ classes, href, children }) {
    return (
        <Link className={"block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 transition-all duration-700 ease-in-out" + classes} href={href}>
            {children}
        </Link>
    )
}