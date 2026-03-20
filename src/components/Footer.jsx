export default function Footer({ name }) {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
