export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 p-4 text-sm text-center py-8 text-black/50">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved |
          Developed By Tarunna Sen
        </p>
      </aside>
    </footer>
  );
}
