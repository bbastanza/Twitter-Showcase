#pragma checksum "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/Shared/NavMenu.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "aedabeb7f9e57abc740a36bb23dbb0d3a12f9a72"
// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace twitter_showcase_server.Shared
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using twitter_showcase_server;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/_Imports.razor"
using twitter_showcase_server.Shared;

#line default
#line hidden
#nullable disable
    public partial class NavMenu : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#nullable restore
#line 28 "/home/stanzu10/Development/git/twitter-showcase/Backend/twitter-showcase-server/twitter-showcase-server/Shared/NavMenu.razor"
       
    private bool collapseNavMenu = true;

    private string NavMenuCssClass => collapseNavMenu ? "collapse" : null;

    private void ToggleNavMenu()
    {
        collapseNavMenu = !collapseNavMenu;
    }

#line default
#line hidden
#nullable disable
    }
}
#pragma warning restore 1591
