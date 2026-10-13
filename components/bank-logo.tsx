import Image from "next/image";
import { cn } from "@/lib/utils";

interface BankLogoProps {
  compact?: boolean;
  subtitle?: string; // Kept for backwards compatibility if passed
  className?: string;
  theme?: "light" | "dark"; // Kept for backwards compatibility if passed
}

export function BankLogo({
  compact = false,
  className,
}: BankLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("relative flex shrink-0 items-center", compact ? "h-12 md:h-14" : "h-16 md:h-20")}>
        <Image 
          src="/logo.png" 
          alt="Mervault Financial Group" 
          width={800}
          height={250}
          className="object-contain w-auto h-full max-w-[200px] md:max-w-[250px]"
          priority
        />
      </div>
    </div>
  );
}
