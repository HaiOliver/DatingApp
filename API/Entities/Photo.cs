using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    // !! help create Photos table in DB
    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public bool IsMain { get; set; }

        public string PublicId { get; set; }

        // !!! add relationship AppUser <-> Photos
        public AppUser AppUser { get; set; }

        public int AppUserId { get; set; }
    }
}