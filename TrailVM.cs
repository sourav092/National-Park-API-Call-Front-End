using Microsoft.AspNetCore.Mvc.Rendering;

namespace NPWebApp_1.Models.View_Models
{
    public class TrailVM
    {
        public Trail Trail { get; set; }
        public IEnumerable<SelectListItem> nationalParkList { get; set; }
    }
}
