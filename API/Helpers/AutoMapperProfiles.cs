using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(){
            // !! create Mapper between 2 objects
            CreateMap<AppUser, MemberDto>()
            .ForMember(
                // ? five destination to map
                destination => destination.PhotoUrl,
                // ? where to map -> to load PhotoUrl -> pass photoUrl
                option =>
                    option.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
            .ForMember(
                // ? map Age properties
                dest => dest.Age,
                opt => opt.MapFrom(src =>src.DateOfBirth.CalculateAge())
            );

            CreateMap<Photo,PhotoDto>();
            // ! need to register in AddAplicationServices
        }
    }
}