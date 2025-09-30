export default function ResponsiveLayoutTemplate() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile: Vertical Stack Layout */}
      <div className="md:hidden">
        {/* Header */}
        <header className="bg-header text-header-foreground p-6 flex items-center justify-center">
          <h2 className="text-xl font-bold">HEADER</h2>
        </header>

        {/* Menu */}
        <div className="bg-menu text-menu-foreground p-6 flex items-center justify-center">
          <h2 className="text-xl font-bold">MENU</h2>
        </div>

        {/* Hero */}
        <div className="bg-hero text-hero-foreground p-12 flex items-center justify-center min-h-[200px]">
          <h2 className="text-xl font-bold">HERO</h2>
        </div>

        {/* Main */}
        <div className="bg-main text-main-foreground p-12 flex items-center justify-center min-h-[180px]">
          <h2 className="text-xl font-bold">MAIN</h2>
        </div>

        {/* Banner */}
        <div className="bg-banner text-banner-foreground p-10 flex items-center justify-center">
          <h2 className="text-xl font-bold">BANNER</h2>
        </div>

        {/* Extra */}
        <div className="bg-extra text-extra-foreground p-10 flex items-center justify-center">
          <h2 className="text-xl font-bold">EXTRA</h2>
        </div>

        {/* Image */}
        <div className="bg-image text-image-foreground p-12 flex items-center justify-center">
          <h2 className="text-xl font-bold">IMAGE</h2>
        </div>
      </div>

      {/* Tablet: Sidebar Menu Layout */}
      <div className="hidden md:block lg:hidden">
        {/* Header */}
        <header className="bg-header text-header-foreground p-6 flex items-center justify-center">
          <h2 className="text-xl font-bold">HEADER</h2>
        </header>

        <div className="flex">
          {/* Left Sidebar Menu */}
          <aside className="bg-menu text-menu-foreground w-[180px] flex items-center justify-center">
            <h2 className="text-xl font-bold -rotate-0 writing-mode-vertical">MENU</h2>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Hero */}
            <div className="bg-hero text-hero-foreground p-16 flex items-center justify-center min-h-[240px]">
              <h2 className="text-xl font-bold">HERO</h2>
            </div>

            {/* Main */}
            <div className="bg-main text-main-foreground p-16 flex items-center justify-center min-h-[220px]">
              <h2 className="text-xl font-bold">MAIN</h2>
            </div>

            {/* Bottom Row: Banner, Extra, Image */}
            <div className="grid grid-cols-[1fr_1fr_auto] gap-0">
              {/* Banner */}
              <div className="bg-banner text-banner-foreground p-12 flex items-center justify-center col-span-2">
                <h2 className="text-xl font-bold">BANNER</h2>
              </div>

              {/* Extra */}
              <div className="bg-extra text-extra-foreground p-12 flex items-center justify-center">
                <h2 className="text-xl font-bold">EXTRA</h2>
              </div>

              {/* Image */}
              <div className="bg-image text-image-foreground p-12 flex items-center justify-center">
                <h2 className="text-xl font-bold">IMAGE</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Split Header/Menu + Right Sidebar Layout */}
      <div className="hidden lg:block">
        {/* Header + Menu Row */}
        <div className="grid grid-cols-[auto_1fr] gap-0">
          <header className="bg-header text-header-foreground p-6 flex items-center justify-center min-w-[200px]">
            <h2 className="text-xl font-bold">HEADER</h2>
          </header>
          <div className="bg-menu text-menu-foreground p-6 flex items-center justify-center">
            <h2 className="text-xl font-bold">MENU</h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-[1fr_auto] gap-0">
          {/* Left Column */}
          <div>
            {/* Hero */}
            <div className="bg-hero text-hero-foreground p-20 flex items-center justify-center min-h-[300px]">
              <h2 className="text-2xl font-bold">HERO</h2>
            </div>

            {/* Main */}
            <div className="bg-main text-main-foreground p-20 flex items-center justify-center min-h-[240px]">
              <h2 className="text-2xl font-bold">MAIN</h2>
            </div>

            {/* Banner - Full Width */}
            <div className="bg-banner text-banner-foreground p-12 flex items-center justify-center">
              <h2 className="text-xl font-bold">BANNER</h2>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[280px]">
            {/* Image */}
            <div className="bg-image text-image-foreground p-12 flex items-center justify-center min-h-[300px]">
              <h2 className="text-xl font-bold">IMAGE</h2>
            </div>

            {/* Extra */}
            <div className="bg-extra text-extra-foreground p-12 flex items-center justify-center min-h-[240px]">
              <h2 className="text-xl font-bold">EXTRA</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
