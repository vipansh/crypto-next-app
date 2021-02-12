import Link from 'next/Link'
import React from 'react'
import styles from "./navbar.module.css"

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <svg height="96pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg" > <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="248" x2="248" y1="496" y2="0"><stop offset="0" stopColor="#9f2fff" /><stop offset="1" stopColor="#0bb1d3" /></linearGradient><path d="m240 288v16h-24v112h24v16h16v-16c17.648438 0 32-14.351562 32-32 0-9.542969-4.199219-18.136719-10.855469-24 6.65625-5.863281 10.855469-14.457031 10.855469-24 0-17.648438-14.351562-32-32-32v-16zm16 112h-24v-32h24c8.824219 0 16 7.175781 16 16s-7.175781 16-16 16zm16-64c0 8.824219-7.175781 16-16 16h-24v-32h24c8.824219 0 16 7.175781 16 16zm96-256c-16.976562 0-33.160156 3.390625-48 9.425781v-25.425781h-16v33.320312c-5.609375 3.253907-10.96875 6.878907-16 10.917969v-60.238281h-16v75.625c-6.089844 6.917969-11.503906 14.429688-16 22.550781v-146.175781h-16v146.167969c-4.496094-8.121094-9.910156-15.632813-16-22.550781v-75.617188h-16v60.238281c-5.03125-4.039062-10.390625-7.664062-16-10.917969v-33.320312h-16v25.425781c-14.839844-6.035156-31.023438-9.425781-48-9.425781-70.574219 0-128 57.425781-128 128 0 27.726562 8.960938 53.351562 24 74.335938v109.664062h16v-91.289062c4.992188 4.738281 10.296875 9.144531 16 13.042968v110.246094h16v-101.078125c5.160156 2.527344 10.480469 4.765625 16 6.589844v134.488281h16v-130.335938c5.984375 1.144532 12.136719 1.777344 18.375 2.046876-1.519531 7.875-2.375 15.976562-2.375 24.289062 0 70.574219 57.425781 128 128 128s128-57.425781 128-128c0-8.3125-.855469-16.414062-2.375-24.289062 6.246094-.269532 12.390625-.910157 18.375-2.046876v130.335938h16v-134.488281c5.519531-1.824219 10.839844-4.0625 16-6.582031v101.070312h16v-110.257812c5.703125-3.894532 11.007812-8.292969 16-13.039063v91.296875h16v-109.664062c15.039062-20.984376 24-46.609376 24-74.335938 0-70.574219-57.425781-128-128-128zm-240 16c56.3125 0 102.921875 41.816406 110.71875 96h-67.664062l-10.496094 21-24.816406-57.894531-29.980469 74.957031-23.242188-92.984375-31.464843 62.921875h-34.648438c4.128906-58.023438 52.539062-104 111.59375-104zm-111.59375 120h44.546875l16.535156-33.078125 24.757813 99.015625 34.019531-85.042969 23.183594 54.105469 21.496093-43h59.054688c0 8.289062-.960938 16.519531-2.753906 24.542969-51.839844 4.34375-94.941406 39.65625-110.726563 87.386719-58.382812-.777344-106.015625-46.402344-110.113281-103.929688zm231.59375 256c-61.761719 0-112-50.238281-112-112s50.238281-112 112-112 112 50.238281 112 112-50.238281 112-112 112zm121.480469-152.070312c-15.785157-47.722657-58.886719-83.042969-110.726563-87.378907-1.792968-8.023437-2.753906-16.246093-2.753906-24.550781 0-61.761719 50.238281-112 112-112s112 50.238281 112 112c0 61.257812-49.449219 111.121094-110.519531 111.929688zm-25.480469 40.070312c0 22.40625-7.894531 44.214844-22.246094 61.425781l-12.28125-10.25c11.941406-14.335937 18.527344-32.511719 18.527344-51.175781 0-44.113281-35.886719-80-80-80-18.664062 0-36.832031 6.585938-51.167969 18.527344l-10.246093-12.289063c17.207031-14.34375 39.015624-22.238281 61.414062-22.238281 52.9375 0 96 43.0625 96 96zm-44.832031 61.472656 10.246093 12.289063c-17.207031 14.34375-39.015624 22.238281-61.414062 22.238281-52.9375 0-96-43.0625-96-96 0-22.40625 7.894531-44.214844 22.246094-61.425781l12.28125 10.25c-11.941406 14.335937-18.527344 32.511719-18.527344 51.175781 0 44.113281 35.886719 80 80 80 18.664062 0 36.832031-6.585938 51.167969-18.527344zm11.214843-213.472656 57.617188 86.425781 57.617188-86.425781-57.617188-86.425781zm49.617188 4.894531-27.527344-9.175781 27.527344-41.292969zm0 16.875v23.804688l-20.40625-30.613281zm16 0 20.40625-6.800781-20.40625 30.605469zm0-16.875v-50.480469l27.527344 41.296876zm-352 195.105469h16v16h-16zm32 32h16v16h-16zm32 40h16v16h-16zm384-56h-16v-16h16zm-32 32h-16v-16h16zm-32 24v16h-16v-16zm-200-448v-16h16v16zm64 0v-16h16v16zm0 0" fill="url(#a)" /></svg>
            </Link>

        </div >
    )
}