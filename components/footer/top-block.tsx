import { footerData, footerlinkClass } from "@/constants";

export function TopBlock() {
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[32px] font-medium leading-[38.4px]">
            Get the <span className="text-[#4D5ED8]">answer</span> to any
            <br />
            of your burning questions.
          </h2>
        </div>

        <div className="flex gap-6 w-[300px] justify-center">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#EAECFF80]/50 text-xs uppercase mb-4 tracking-[1px]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className={footerlinkClass}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
