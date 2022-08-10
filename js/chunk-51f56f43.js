(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51f56f43"],{4693:function(e,t,a){"use strict";var r=a("ecfa"),n=a.n(r);n.a},"896a":function(e,t,a){"use strict";var r=a("9ed8"),n=a.n(r);n.a},"9ed8":function(e,t,a){},a0d9:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"main-content"},[a("h1",[e._v("Building PacketLab on your Machine")]),e._m(0),a("b",{staticClass:"Section"},[e._v("Downloads (also available on "),a("router-link",{attrs:{to:{name:"About"}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.route,n=t.href;return[a("a",{class:{active:e.currentRouteName==r.name},attrs:{href:n}},[e._v(e._s(r.meta.title))])]}}])}),e._v(" page)")],1),e._m(1),e._m(2),a("h2",[e._v("Using the Prebuilt Package")]),a("p",[e._v("Although the Prebuilt Package is almost ready to go, there are still two simple steps that need to be done before getting started with PacketLab.")]),e._m(3),e._m(4),a("h2",[e._v("Building from Source Tarball")]),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),a("p",[e._v("See the section below for information about the file tree and directories in the PacketLab build:")]),a("h2",[e._v("Package File Structure")]),a("div",{staticClass:"filetreedesc"},[e._m(12),e._m(13),e._m(14),a("p",[a("strong",[e._v("example_mlets")]),e._v(" contains "),a("router-link",{attrs:{to:{name:"SampleExps"}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.route,n=t.href;return[a("a",{class:{active:e.currentRouteName==r.name},attrs:{href:n}},[e._v("sample experiments included with PacketLab")])]}}])}),e._v(", as well as a Makefile to compile them.")],1),a("p",[a("strong",[e._v("include")]),e._v(" contains the two header files for the "),a("router-link",{attrs:{to:{name:"LibraryIntro"}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.route,n=t.href;return[a("a",{class:{active:e.currentRouteName==r.name},attrs:{href:n}},[e._v("PacketLab Library")])]}}])}),e._v(".")],1),e._m(15),e._m(16),e._m(17)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("To get PacketLab onto our machine, we have two download options. PacketLab can be downloaded through a prebuilt package, or via a tarball. "),a("em",[a("b",[e._v("Currently, both packages are only supported on Linux")])]),e._v(". The prebuilt package is more user-friendly and comes as a directory with all files already in-place and ready to use. Building from tarball involves a few additional steps, but is still relatively simple. The tarball also configures itself to the user's system, which may be important in cases where the prebuilt package does not work.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[a("a",{attrs:{href:"https://packetlab.web.illinois.edu/release/pktlab-0.1.0_bin.linux.zip"}},[e._v("Prebuilt Package")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[a("a",{attrs:{href:"https://packetlab.web.illinois.edu/release/pktlab-0.1.0.tar.gz"}},[e._v("Source Tarball")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("First, we need to ensure that all Python libraries needed by PacketLab are installed locally for PacketLab to use. To install all the libraries, first navigate to the "),a("code",[e._v("pktlab")]),e._v(" directory. Then, run "),a("code",[e._v("pip install --user -r setup_aux/requirements.txt")]),e._v(" to install the required packages.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Next, navigate to the "),a("code",[e._v("bin")]),e._v(" directory, which contains compiled binaries for the different PacketLab entities as well as an initialization script for PacketLab. Run the script as "),a("code",[e._v("./pktlab_init")]),e._v(". This script gets PacketLab ready for use by doing things like creating credentials and default config files for testing experiments. You are now ready to use PacketLab!")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("After downloading the tarball, unpack it, and navigate to the new "),a("code",[e._v("pktlab")]),e._v(" directory from the tarball in your terminal.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Now, run "),a("code",[e._v('sh configure --prefix="DIRECTORY PATH"')]),e._v(', where "DIRECTORY PATH" refers to the '),a("em",[e._v("absolute path")]),e._v(" to the directory where you want PacketLab to be built. If the "),a("code",[e._v("--prefix")]),e._v(" tag is left out, the default system directory will be used. This is not recommended unless you are certain this is where you want PacketLab to be built. Settings and requirements for PacketLab will then be checked and configured.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("blockquote",[e._v("When using "),a("code",[e._v("--prefix")]),e._v(", there should not be a space before the equals sign."),a("br"),e._v("It does not matter whether the specified directory already exists - if it does not exist, it will be created by "),a("code",[e._v("make install")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Then, run "),a("code",[e._v("make")]),e._v(" to build PacketLab. Finally, run "),a("code",[e._v("make install")]),e._v(" to copy the built PacketLab files to the installation directory specified when running "),a("code",[e._v("configure")]),e._v(" or the default system directory if unspecified.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("blockquote",[e._v("If you need to restart the configuration process (i.e. to specify a different directory),"),a("br"),e._v("simply run the "),a("code",[e._v("configure")]),e._v(" script again and go through the same steps listed above.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Now, navigate to the directory where PacketLab has been built. Before we can initialize PacketLab, we need to run "),a("code",[e._v("pip install --user -r share/pktlab/setup_aux/requirements.txt")]),e._v(" to install all the Python libraries that PacketLab needs to operate (including the pktlab Python library).")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Now, navigate to the "),a("code",[e._v("bin")]),e._v(" directory, which contains compiled binaries for the different PacketLab entities as well as an initialization script for PacketLab. Run the script as "),a("code",[e._v("./pktlab_init")]),e._v(". This script gets PacketLab ready for use by doing things like creating credentials and default config files for testing experiments. You are now ready to use PacketLab!")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("bin")]),e._v(" contains compiled binaries for the Broker, Experiment Manager, and Endpoint.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("config")]),e._v(" contains template config files for the Experiment Manager and Endpoint that can be modified to suit the needs of different experimenters, as well as an example config file for each entity.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("cred")]),e._v(" contains test credentials for running sample experiments and general testing. These credentials are NOT suitable for use in actual experiments - a key and certificate should be generated for them instead..")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("lib")]),e._v(" contains compiled source code for the PacketLab Library.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("setup_aux")]),e._v(" contains the PacketLab Python library requirements and initialization script code used when initializing PacketLab")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("blockquote",[a("strong",[e._v("share")]),e._v(" is only present in the "),a("b",[e._v("source tarball")]),e._v(", and contains a pktlab directory that is home to config, cred, example_mlets, and setup_aux")])}],i=(a("4693"),a("896a"),a("2877")),o={},s=Object(i["a"])(o,r,n,!1,null,"735a5630",null);t["default"]=s.exports},ecfa:function(e,t,a){}}]);
//# sourceMappingURL=chunk-51f56f43.js.map