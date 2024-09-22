import React from "react";

const Test = () => {
  return (
    <div>
      <div class="bg-gray-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="#" class="text-2xl font-bold">
                  Logo
                </a>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <div class="relative group">
                    <a href="#" class="text-lg font-medium hover:text-gray-400">
                      Services
                    </a>

                    <div class="absolute -left-40 w-screen  bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div class="grid grid-cols-3 gap-4">
                          <a
                            href="#"
                            class="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
                          >
                            Web Development
                          </a>
                          <a
                            href="#"
                            class="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
                          >
                            Mobile Development
                          </a>
                          <a
                            href="#"
                            class="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
                          >
                            Cloud Engineering
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="#" class="text-lg font-medium hover:text-gray-400">
                    About Us
                  </a>
                  <a href="#" class="text-lg font-medium hover:text-gray-400">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
